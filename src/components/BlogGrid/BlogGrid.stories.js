import React from 'react'
import BlogGrid from './index'

export default {
    title: "General/Gallery",
    component: BlogGrid,
    argTypes: {
        headingText: { control: "text" },
        data: { control: "array" },
    },
}

export const Template = args => <BlogGrid {...args} />
export const BlogGridWithArgs = Template.bind({});
BlogGridWithArgs.args = {
    headingText: "Our Latest blogs",
    data: [{
        cardImage: "https://s3-alpha-sig.figma.com/img/95a8/5841/ace4f4d40ef9b991562559b4f26ec15d?Expires=1679875200&Signature=qT1pLhUyMNNxlqC7ainOWxzi0SyJQ37aVjPSK5dV6QBJ6QKzTOqov3S6CGenCbzUpGWcNA81KZ5UtrhKf0q0Y5w6lgHjl7wJ21hvO~MteCnG887f2ck3yWqCML~02SWu0ZPJM6iLmSqzLszJZYWE2pTsah-3JubEMZEnSegfKyJh7BYscZPcxLeGpscsyA3x4cla30BdJAUj3ogceqWJgrd7w077vNa2LsYuEH34O4nUTUvIqAww26H02alWrnxEYIDhXkoAnz-YGcSZVxV9KsHugi5Bawh8C~MOwSU~PgXwPpaChJIN1tQh98NrIAesUFSElxhi2ojvZCAMgYxdnw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        cardHeadingText: "Los Angeles Institute",
        cardDescriptionText: "Street Food Convention will showcase products like Packed food, beef and lamb, street food."
    },
    {
        cardImage: "https://s3-alpha-sig.figma.com/img/0112/5618/41592ea17a16352af76ff3c7e437d2a0?Expires=1679875200&Signature=X59-2nG3sSbAAmdR1kAXhfwkHCoQE7mm4hPCfn3-PORhSbiiWACmsXKdKNh8Aj3lI9LCKB9lOahISZtJRaJkX1WZtdXd~4lC7GSMAL0VaLdwofjMOwd9-Xw8wdP764hZAEcpTzwO7MbqPaDmR4e9ZUxV3XowpLZRceu7xHCTCl-HxVIGTpVZeymzFxXpq2ZuEaCqMjKxx7JPiPTc~tLk-4AcGZpvkCYrhYt1tu60~YlQrj585VevaOmbuHYLWniPxvXMmJNWfMU-LZToDc0V-ts9qi48Jp9VdFVSvm-NiH5b3v-I5Fq4e3QkAiU3PfVfgXJalRjQhh3qxPWq45lJew__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        cardHeadingText: "Los Angeles Institute",
        cardDescriptionText: "Street Food Convention will showcase products like Packed food, beef and lamb, street food."
    },
    {
        cardImage: "https://s3-alpha-sig.figma.com/img/de78/052a/3fbe6482fcc26773271a3b4de15d387b?Expires=1679875200&Signature=QANlJmK3wV8FvtyHQjZjRdb9YYuLt5ZmT4D6Rl9Z6l-ChlEQh8bK2eozjZSUpKWEijaQGR~BWOkhR6jyOPoh2jeplNp08RED72il7Y1qudjYwJu6wKlhvSbVT-HscyGjS7nibhtlHJ0WXeKtvlhZTn1zfTVkzfDLbPFDWwqTEzePYmzZMAJkf801aVqglsCjWQAHUlv3~bf~LjHwI7X3xvpos3IAOM~5PV3FDsFhGG~CCGiJ6wygSXtJrqccqxNEXnju1kViwdTq7qzr4QjdM9inEVNNz4J5IN~KPzfmYvNhrtGrb0V8mD8XysiuXGoYOPhXQ-TLj4L7HNzxWh0ATg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        cardHeadingText: "Los Angeles Institute",
        cardDescriptionText: "Street Food Convention will showcase products like Packed food, beef and lamb, street food."
    }
    ]
}