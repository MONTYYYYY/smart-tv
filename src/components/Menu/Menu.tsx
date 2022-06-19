import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAppSelector } from '../../helpers/hooks';
import { selectTv } from '../../redux/slices/tvSlice';
import {
  MenuContainer,
  MenuItemContainer,
  MenuLabel,
  MenuLink,
  MenuLinkContent, MenuList as MenuListContainer,
} from './styles';

function Menu() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedTopicSlug = searchParams.get('topic');
  const { topics } = useAppSelector(selectTv);

  const handleMenuItemClick = (topicSlug: string) => {
    setSearchParams({ topic: topicSlug });
  };

  return (
    <MenuContainer id="menu" flexDirection="column">
      <MenuListContainer id="menuList">
        {topics?.map((topic) => {
          const active = selectedTopicSlug === topic.slug;
          return (
            <MenuItemContainer key={topic.id} active={active}>
              {active && <div className="activeIndicator" />}
              <MenuLink className={active ? 'active' : ''} onClick={() => handleMenuItemClick(topic.slug)}>
                <MenuLinkContent active={active}>
                  <MenuLabel className={active ? 'active' : ''}>{topic.title}</MenuLabel>
                </MenuLinkContent>
              </MenuLink>
            </MenuItemContainer>
          );
        })}
      </MenuListContainer>
    </MenuContainer>
  );
}
export default Menu;
