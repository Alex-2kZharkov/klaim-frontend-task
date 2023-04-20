import React, { useContext, useEffect, useState } from 'react';
import { Image, Row, Col } from 'antd';
import Title from 'antd/es/typography/Title';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Layout } from '../../components/Layout';

import { useAxios } from '../../hooks/useAxios';
import { Endpoints } from '../../constants';
import { UserProfileDto } from '../../types';

import { useFirstName } from '../../hooks/useFirstName';
import { QuoteAction, QuoteContext, UserAction, UserContext } from '../../store';
import { RequestQuoteModal } from './components/RequestQuoteModal';

import styles from './Profile.module.scss';

export const Profile = () => {
  const { data: userProfile, isLoading } = useAxios<UserProfileDto>({
    method: 'GET',
    url: Endpoints.profile,
  });

  const { dispatch: userDispatch } = useContext(UserContext);
  const {
    state: { author, quote },
    dispatch: quoteDispatch,
  } = useContext(QuoteContext);

  const firstName = useFirstName(userProfile?.fullname);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const hasQuote = author && quote;

  const onModalVisibilityChange = () => {
    if (!isModalOpen) {
      quoteDispatch({ type: QuoteAction.reset });
    }
    setIsModalOpen(prevState => !prevState);
  };

  const onUpdateClick = () => {
    onModalVisibilityChange();
  };

  useEffect(() => {
    if (userProfile) {
      userDispatch({
        type: UserAction.setUser,
        payload: { isAuthenticated: true, user: userProfile },
      });
    }
  }, [userProfile]);

  return (
    <Layout>
      <Header />
      <Row align="top" className={styles.container}>
        <Col span={4}>
          <Image
            className={styles.image}
            width={100}
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a5408360-9b0f-41d5-95c6-d4959853616e/d7m80s1-e2138ad5-2692-4561-93fd-77f17fccc7e0.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E1NDA4MzYwLTliMGYtNDFkNS05NWM2LWQ0OTU5ODUzNjE2ZVwvZDdtODBzMS1lMjEzOGFkNS0yNjkyLTQ1NjEtOTNmZC03N2YxN2ZjY2M3ZTAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0._JW7ONcKzfVOOyNA1qYWawwwOvG9hiQiBRB3sjhqrY8"
            alt={`User's avatar`}
          />
        </Col>
        <Col className={styles.content}>
          <Title className={styles.title} level={2}>
            Welcome, {isLoading ? '...' : `${firstName}!`}
          </Title>
          <Button onClick={onUpdateClick} type="primary">
            Update
          </Button>
        </Col>
      </Row>
      {hasQuote && (
        <blockquote className={styles.quoteContainer}>
          <p className={styles.quote}>{quote?.quote}</p>
          <figcaption className={styles.author}>{author?.name}</figcaption>
        </blockquote>
      )}
      <RequestQuoteModal
        isModalOpen={isModalOpen}
        onModalVisibilityChange={onModalVisibilityChange}
      />
    </Layout>
  );
};
