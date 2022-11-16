import { Pagination } from 'antd';
import "antd/lib/pagination/style/index.css";
import classes from "./PaginationPage.module.scss"
import React from 'react';
import { PaginationTypeProps } from '../../types/type';

const PaginationPage: React.FC<PaginationTypeProps> = ({ currentPage, setCurrentPage, pageSize, setPageSize}) => (
  <div className={classes.paginated}>
    <Pagination current={currentPage} size={"small"} defaultPageSize={pageSize} total={6} showQuickJumper onChange={(page:number, pageSize:number) => {
      setCurrentPage(page)
      setPageSize(pageSize)
    }} style={{ marginTop: "20px", marginBottom: "20px"}}/>
  </div>
);

export default PaginationPage;