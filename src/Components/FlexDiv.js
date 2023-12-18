import {styled} from 'styled-components'

const FlexDiv = styled.div`
    width: 37.5vw;
    height: 85vh;
    background-color: #F3D64F;
    margin: 30px auto;
    display: flex;
    flex-direction: ${props => props.direction};
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    border: none;
    border-radius: 7px;
    box-sizing: border-box;
`;

export default FlexDiv;