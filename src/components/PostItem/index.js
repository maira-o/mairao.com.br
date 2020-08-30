import React from 'react'

import * as S from './styled'

const PostItem = () => (
  <S.PostItemLink to="/slug/">
    <S.PostItemWrapper>
      <S.PostItemTag background="#005A9C">
        wcag 
      </S.PostItemTag>

      <S.PostItemInfo>
        <S.PostItemDate>
          30 de Agosto de 2020 . 4 min de leitura
        </S.PostItemDate>

        <S.PostItemTitle>
          Acessibilidade Web
        </S.PostItemTitle>

        <S.PostItemDescription>
          Algumas razões para você ter sempre acessibilidade web em mente. 
        </S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

export default PostItem