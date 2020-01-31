import styled from 'styled-components/native';

interface IFilterProps {
  color: string;
}

export const ItemListStyle = {
  Container: styled.View`
    flex: 1;
  `,
  FilterBar: styled.View`
    flex: 1;
    justify-content: space-between;
    flex-direction: row;
  `,
  Filter: styled.Button<IFilterProps>`
    padding: 15px 30px;
    background-color: ${(props) => props.color};
  `,
};
