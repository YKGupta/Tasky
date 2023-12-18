import {styled} from 'styled-components'

const ChuhaText = styled.h1`
    color: ${props => props.color};
    font-family: Roboto;
    font-size: ${props => props.size};
    font-weight: 200;
    opacity: ${props => props.opacity};
    transition: all 0.5s;

    &:hover
    {
        opacity: 1;
    }
`;

export default ChuhaText;