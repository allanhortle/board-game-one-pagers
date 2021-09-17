import styled from 'styled-components';
import styledProps, {StyledProps} from './StyledProps';

export const Table = styled.table<StyledProps>`
    ${styledProps}
    text-align: left;
`;
export const Tr = styled.tr<StyledProps>({}, styledProps);

export const Th = styled.th<StyledProps>`
    ${styledProps}
    font-weight: bold;
    padding-right: 1rem;
`;

export const Td = styled.td<StyledProps>`
    ${styledProps}
    padding-right: 1rem;
`;
