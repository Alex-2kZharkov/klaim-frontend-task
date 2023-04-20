import React, { useContext, useEffect, useState } from 'react';
import { Modal, Row } from 'antd';

import { Button } from '../../../../components/Button';
import { useAxios } from '../../../../hooks/useAxios';
import { Endpoints } from '../../../../constants';
import { AuthorDto, QuoteDto } from '../../../../types';
import { QuoteAction, QuoteContext } from '../../../../store';

import styles from '../../Profile.module.scss';

type Props = {
  isModalOpen: boolean;
  onModalVisibilityChange: () => void;
};

export const RequestQuoteModal = ({ isModalOpen, onModalVisibilityChange }: Props) => {
  const { dispatch } = useContext(QuoteContext);

  const { isLoading: isAuthorLoading, fetchData: fetchAuthor } = useAxios<AuthorDto>({});
  const { isLoading: isQuoteLoading, fetchData: fetchQuote } = useAxios<QuoteDto>({});

  const [abortController, setAbortController] = useState(new AbortController());

  const onCancel = () => {
    abortController.abort();
    setAbortController(new AbortController());
    onModalVisibilityChange();
  };

  useEffect(() => {
    const fetchData = async () => {
      const author = await fetchAuthor({
        method: 'GET',
        url: Endpoints.author,
        signal: abortController.signal,
      });
      const quote = await fetchQuote({
        method: 'GET',
        url: Endpoints.quote,
        params: { authorId: author?.data?.authorId },
        signal: abortController.signal,
      });
      dispatch({
        type: QuoteAction.fetchData,
        payload: { author: author?.data ?? null, quote: quote?.data ?? null },
      });
    };

    if (isModalOpen) {
      fetchData();
    }
  }, [isModalOpen]);

  return (
    <Modal
      title="Requesting the quote"
      open={isModalOpen}
      onOk={onModalVisibilityChange}
      onCancel={onModalVisibilityChange}
      footer={[
        <Row className={styles.modalFooter}>
          <Button type="primary" key="back" onClick={onCancel}>
            Cancel
          </Button>
        </Row>,
      ]}
    >
      <p>Step 1. Requesting author.. {!isAuthorLoading && 'Completed'}</p>
      <p>Step 2. Requesting quote.. {!isQuoteLoading && !isAuthorLoading && 'Completed'}</p>
    </Modal>
  );
};
