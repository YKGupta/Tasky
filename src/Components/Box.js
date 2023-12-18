import {styled} from 'styled-components'

const Box = styled.div`
    display: inline-block;
    width: 150px;
    height: 150px;
    background-color: #4D4B4F;
    margin: 10px 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover
    {
        background-color: #2F2E1F;
        cursor: pointer;
    }
`;

export default Box;