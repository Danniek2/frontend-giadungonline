import { Card } from "antd";
import styled from "styled-components";

export const WrapperCard =styled(Card)`
    width: 200px,
    & img {
        height: 200px,
        width: 200px,
    }
    `
export const StyleNameProduct = styled.div`
    font-weight: bold;
    font-size: 13px;
    line-height: 16px;
    color: #1f1f1f;
`   
export const ReportProduct = styled.div`
    font-size: 11px;
    color: #1f1f1f;
    display: flex;
    align-items: center;
    margin: 4px 0;
`
export const PriceProduct = styled.div`
    font-size: 16px;
    color: #cf1322;
    font-weight: 400;
`
export const DiscountProduct =styled.span`
    font-size: 14px;
    color:  #ff4d4f;
`