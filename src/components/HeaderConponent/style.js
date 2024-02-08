import { Row } from "antd";
import styled from "styled-components";

export const WrapperHeader = styled(Row)`
    padding: 13px 120px;
    background-color: #f0f0f0;
    align-items: center;
    // width: 100%;
    // gap: 5px;
`
export const WrapperTextHeader = styled.span`
    font-size: 25px;
    color: #262626;
    font-weight: bold,
    text-align: left;
    align-items: center;
`
export const WrapperAccoutHeader = styled.div`
    display: flex;
    align-items: center;
    color: #262626;
    gap: 10px;
    padding-left: 50px;
`
export const WrapperNavbar = styled(Row)`
    padding: 13px 200px;
    background-color: #d9d9d9;
    align-items: center;
    text-align: center;
`