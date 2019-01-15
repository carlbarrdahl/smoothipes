import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

function buildJSONLD(recipe) {
  console.log("BUILD", recipe)
  if (!recipe) {
    return null
  }
  return {
    "@context": "https://schema.org/",
    "@type": "Recipe",
    name: recipe.name,
    image: recipe.images,
    author: {
      "@type": "Person",
      name: "Author Lastname"
    },
    datePublished: recipe.date,
    description: recipe.description,
    prepTime: "PT20M",
    cookTime: "PT30M",
    totalTime: "PT50M",
    keywords: recipe.keywords,
    recipeYield: "1 servings",
    recipeCategory: "Smoothie",
    recipeIngredient: recipe.ingredients,
    recipeInstructions: recipe.instructions.map(text => ({
      "@type": "HowToStep",
      text
    }))
    // nutrition: {
    //   "@type": "NutritionInformation",
    //   calories: "270 calories"
    // },
    // review: {
    //   "@type": "Review",
    //   reviewRating: {
    //     "@type": "Rating",
    //     ratingValue: "4",
    //     bestRating: "5"
    //   },
    //   author: {
    //     "@type": "Person",
    //     name: "Julia Benson"
    //   },
    //   datePublished: "2018-05-01",
    //   reviewBody: "This cake is delicious!",
    //   publisher: "The cake makery"
    // },
    // aggregateRating: {
    //   "@type": "AggregateRating",
    //   ratingValue: "5",
    //   ratingCount: "18"
    // }
  }
}

class RecipeTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    console.log(post)

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.excerpt}
          jsonld={buildJSONLD(post.frontmatter)}
        />
        <h2>{post.frontmatter.title}</h2>
        <ul
          style={{
            display: "flex",
            margin: 0,
            listStyle: "none"
          }}
        >
          {(post.frontmatter.images || []).map(image => (
            <li>
              <img src={image} />
            </li>
          ))}
        </ul>
        <h3>Ingredients</h3>
        <ul>
          {post.frontmatter.ingredients.map(ingredient => (
            <li>{ingredient}</li>
          ))}
        </ul>
        <h3>Instructions</h3>
        <ul>
          {post.frontmatter.instructions.map(instruction => (
            <li>{instruction}</li>
          ))}
        </ul>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default RecipeTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        images
        ingredients
        instructions
      }
    }
  }
`
