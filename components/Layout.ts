import styled from 'styled-components';
import styledProps, {StyledProps} from './StyledProps';

export const Box = styled.div<StyledProps>({display: 'block'}, styledProps);
export const Flex = styled.div<StyledProps>({display: 'flex'}, styledProps);
export const Fixed = styled.div<StyledProps>({position: 'fixed'}, styledProps);

export const Wrapper = styled(Box)`
    max-width: 48rem;
    margin: auto;
`;
