import styled from 'styled-components/native';

interface IFilterProps {
  color: string;
}

export const ItemListStyle = {
  Wrapper: styled.TouchableHighlight`
    flex: 1;
  `,
  Container: styled.View`
    flex: 1;
  `,
  FilterBar: styled.View`
    justify-content: space-between;
    flex-direction: row;
  `,
  Filter: styled.Button<IFilterProps>`
    padding: 15px 30px;
    background-color: ${(props) => props.color};
  `,
};
