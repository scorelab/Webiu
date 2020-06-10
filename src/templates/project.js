// import React from 'react';

// export default function ProjectTemplate({data}) {
//   const { markdownRemark: post } = data;

//   console.log(data)
//   return (
//     <div>
//       <h1>TYPE: Project</h1>
//       <h1>{post.frontmatter.title}</h1>
//       <div dangerouslySetInnerHTML={{__html: post.html}} />
//     </div>
//   )
// }

// export const postQuery = graphql`
//   query ProjectPostByPath($slug: String!) {
//     markdownRemark(frontmatter: { slug: { eq: $slug} }) {
//       html
//       frontmatter {
//         slug
//         title
//       }
//     }
//   }
// `