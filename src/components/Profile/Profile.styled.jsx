import styled from "styled-components";

export const Avatar = styled.img`
    margin-left: auto;
    margin-right: auto;
    margin-bottom: ${p => `${p.theme.space[4]}px`};
    border: ${p => `1px solid ${p.theme.colors.black}`};
    border-radius: 27%;
`;

export const Name = styled.p`
    font-size: ${p => p.theme.fontSizes.l};
    margin-bottom: ${p => `${p.theme.space[3]}px`};
`;

export const Tag = styled.p`
    font-size: ${p => p.theme.fontSizes.s};
    margin-bottom: ${p => `${p.theme.space[3]}px`};
`;

export const Location = styled.p`
    margin-bottom: ${p => `${p.theme.space[3]}px`};
`;