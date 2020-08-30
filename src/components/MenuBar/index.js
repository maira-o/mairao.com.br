import React from 'react'

import { HomeHeart as Home } from '@styled-icons/boxicons-regular/HomeHeart'
import { SearchAlt2 as Search } from '@styled-icons/boxicons-regular/SearchAlt2'
import { UpArrowAlt as Arrow } from '@styled-icons/boxicons-regular/UpArrowAlt'
import { LightBulb as Light } from '@styled-icons/heroicons-outline/LightBulb'
import { GridAlt as Grid } from '@styled-icons/boxicons-regular/GridAlt'

import * as S from './styled'

const MenuBar = () => (
  <S.MenuBarWrapper>
    <S.MenuBarGroup>
      <S.MenuBarLink to="/" title="voltar para home">
        <S.MenuBarItem>
          <Home />
        </S.MenuBarItem>
      </S.MenuBarLink>

      <S.MenuBarLink to="/search/" title="pesquisar">
        <S.MenuBarItem>
          <Search />
        </S.MenuBarItem>
      </S.MenuBarLink>
    </S.MenuBarGroup>

    <S.MenuBarGroup>
      <S.MenuBarItem title="mudar o tema">
        <Light />
      </S.MenuBarItem>

      <S.MenuBarItem title="mudar visualização">
        <Grid />
      </S.MenuBarItem>

      <S.MenuBarItem title="ir para o topo">
        <Arrow />
      </S.MenuBarItem>
    </S.MenuBarGroup>
  </S.MenuBarWrapper>
)

export default MenuBar