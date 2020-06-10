// import React from 'react';

// export default function BlogTemplate({data}) {
//   const { markdownRemark: post } = data;

//   console.log(data)
//   return (
//     <div>
//       <h1>TYPE: BLOG</h1>
//       <h1>{post.frontmatter.title}</h1>
//       <div dangerouslySetInnerHTML={{__html: post.html}} />
//     </div>
//   )
// }

// export const postQuery = graphql`
//   query BlogPostByPath($slug: String!) {
//     markdownRemark(frontmatter: { slug: { eq: $slug} }) {
//       html
//       frontmatter {
//         slug
//         title
//       }
//     }
//   }
// `