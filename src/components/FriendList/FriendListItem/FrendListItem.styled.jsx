import styled from "styled-components";

export const Frend = styled.li`
    display: flex;
    max-width: 500px;
    height: 80px;
    padding: ${p => `${p.theme.space[3]}px`};
    align-items: center;
    border: ${p => `${p.theme.borders.normal} ${p.theme.colors.border}`};
    border-radius: ${p => p.theme.radii.normal};
    background-color: ${p => p.theme.colors.backgroundStats};
    box-shadow: 6px 10px 23px 0px rgba(0,0,0,0.75);

    &:not(:last-child) {
        margin-bottom: ${p => `${p.theme.space[3]}px`};
    }
`;

export const Status = styled.span`
    width: 20px;
    height: 20px;
    margin-right: ${p => `${p.theme.space[5]}px`};
    border-radius: ${p => p.theme.radii.round};
    background-color: ${p => p.isOnline ? p.theme.colors.green : p.theme.colors.red};
`;

export const Image = styled.img`
    margin-right: ${p => `${p.theme.space[6]}px`} ;
`;