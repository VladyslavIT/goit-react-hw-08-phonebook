import styled from '@emotion/styled';

export const List = styled.ul`

`;
export const ListItem = styled.li`

        display: flex;
        padding: 8px;
        border-bottom: 1px dashed black;

       &::before{
    content: '-';
    padding-right: 8px;
}
`;

export const ListButton = styled.button`
    margin-left: auto;
    
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
        border: none;
        background-color: #f52f2f; }
`;