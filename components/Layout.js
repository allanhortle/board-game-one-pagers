// @flow
import styled from 'styled-components';
import {space, color, layout, flexbox, position, border} from 'styled-system';

export const Box = styled.div.attrs(props => {
    if(props.bounded) {
        props.p = 3;
    }
    return props;
})`
    ${layout} ${space} ${color} ${flexbox} ${position} ${border}
    ${props => props.bounded ? `border: 1px solid ${props.theme.colors.yellow};` : ''}
`;

export const Flex = styled.div({display: 'flex'}, position, space, color, layout, flexbox);
export const Fixed = styled.div({position: 'fixed'}, space, layout, position);

export const Wrapper = styled(Box)`
max-width: 48rem;
margin: auto;
`;

