import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import { Pagination } from "antd"

export const ListPagination = ({pageSize, total, onChange}) => {
  return (
    <div className='list-pagination-component'>
      <Pagination 
        defaultCurrent={1}
        pageSize={pageSize} 
        total={total} 
        onChange={(page) => { 
          window.scrollTo(0, 0) 
          onChange(page)
        }}
        hideOnSinglePage
      />
    </div>
  )
}

ListPagination.propTypes = {
  pageSize: PropTypes.number,
  total: PropTypes.number,
  onChange: PropTypes.func,
}
