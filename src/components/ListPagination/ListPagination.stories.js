import React from "react"
import ListPagination from "./index"
import './style.sass';
export default {
    title: "ListPagination",
    component: ListPagination,
    argTypes: {
        pageSize: { control: 'number' },
        total: { control: 'number' },
        onChange: { action: 'onChange', control: null }
    }
}
export const listPagination = (args) => <ListPagination {...args} />;
listPagination.args = {
pageSize:2,
total:10
}