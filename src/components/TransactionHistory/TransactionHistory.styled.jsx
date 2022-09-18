import styled from "styled-components";

export const Table = styled.table`
    width: 90%;
    table-layout: fixed;
    border-collapse: collapse;
    margin-left: auto;
    margin-right: auto;
    border: ${p => `${p.theme.borders.bold} ${p.theme.colors.border}`};

    & > thead {
        height: 60px;
        border: ${p => `${p.theme.borders.bold} ${p.theme.colors.border}`};
        background-color: #6765b3;
    }
`;
