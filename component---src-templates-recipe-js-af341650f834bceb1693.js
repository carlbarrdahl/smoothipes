(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return m});var a=n(7),r=n.n(a),i=(n(158),n(0)),o=n.n(i),l=n(147),c=n(151),s=n(152);n(149);var u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props.data.markdownRemark,n=this.props.data.site.siteMetadata.title,a=this.props.pageContext,r=a.previous,i=a.next;return console.log(t),o.a.createElement(c.a,{location:this.props.location,title:n},o.a.createElement(s.a,{title:t.frontmatter.title,description:t.excerpt,jsonld:(e=t.frontmatter,console.log("BUILD",e),e?{"@context":"https://schema.org/","@type":"Recipe",name:e.name,image:e.images,author:{"@type":"Person",name:"Author Lastname"},datePublished:e.date,description:e.description,prepTime:"PT20M",cookTime:"PT30M",totalTime:"PT50M",keywords:e.keywords,recipeYield:"1 servings",recipeCategory:"Smoothie",recipeIngredient:e.ingredients,recipeInstructions:e.instructions.map(function(e){return{"@type":"HowToStep",text:e}})}:null)}),o.a.createElement("h2",null,t.frontmatter.title),o.a.createElement("ul",{style:{display:"flex",margin:0,listStyle:"none"}},(t.frontmatter.images||[]).map(function(e){return o.a.createElement("li",null,o.a.createElement("img",{src:e}))})),o.a.createElement("h3",null,"Ingredients"),o.a.createElement("ul",null,t.frontmatter.ingredients.map(function(e){return o.a.createElement("li",null,e)})),o.a.createElement("h3",null,"Instructions"),o.a.createElement("ul",null,t.frontmatter.instructions.map(function(e){return o.a.createElement("li",null,e)})),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),o.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},o.a.createElement("li",null,r&&o.a.createElement(l.Link,{to:r.fields.slug,rel:"prev"},"← ",r.frontmatter.title)),o.a.createElement("li",null,i&&o.a.createElement(l.Link,{to:i.fields.slug,rel:"next"},i.frontmatter.title," →"))))},t}(o.a.Component);t.default=u;var m="796811901"},147:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(146),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(148),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var m=n(33);n.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},148:function(e,t,n){var a;e.exports=(a=n(150))&&a.default||a},149:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return s});var a=n(154),r=n.n(a),i=n(155),o=n.n(i);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var l=new r.a;var c=l.rhythm,s=l.scale},150:function(e,t,n){"use strict";n.r(t);n(32);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(51),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},151:function(e,t,n){"use strict";n(32);var a=n(7),r=n.n(a),i=n(0),o=n.n(i),l=n(147),c=n(149),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props,n=t.location,a=t.title,r=t.children;return e="/smoothipes/"===n.pathname?o.a.createElement("h1",{style:Object.assign({},Object(c.b)(1.5),{marginBottom:Object(c.a)(1.5),marginTop:0})},o.a.createElement(l.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)):o.a.createElement("h3",{style:{fontFamily:"IBM Plex Mono, console",marginTop:0}},o.a.createElement(l.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)),o.a.createElement("div",{style:{fontFamily:"IBM Plex Mono",marginLeft:"auto",marginRight:"auto",maxWidth:Object(c.a)(36),padding:Object(c.a)(1.5)+" "+Object(c.a)(.75)}},e,r,o.a.createElement("footer",null))},t}(o.a.Component);t.a=s},152:function(e,t,n){"use strict";var a=n(153),r=n(0),i=n.n(r),o=n(4),l=n.n(o),c=n(156),s=n.n(c),u=n(147);function m(e){var t=e.description,n=e.lang,r=(e.meta,e.keywords,e.title),o=e.jsonld;return i.a.createElement(u.StaticQuery,{query:d,render:function(e){var a=e.site.siteMetadata.image,l=t||e.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:n},title:r,titleTemplate:"%s | "+e.site.siteMetadata.title},i.a.createElement("meta",{name:"description",content:l}),i.a.createElement("meta",{name:"image",content:a}),i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(o)),i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.a.createElement("meta",{name:"twitter:title",content:r}),i.a.createElement("meta",{name:"twitter:description",content:l}),i.a.createElement("meta",{name:"twitter:image",content:a}))},data:a})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=m;var d="55833009"},153:function(e){e.exports={data:{site:{siteMetadata:{title:"smoothipes",description:"a database for smoothie recipes",author:"Carl Barrdahl",image:""}}}}},158:function(e,t,n){var a=n(24).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||n(16)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-templates-recipe-js-af341650f834bceb1693.js.map