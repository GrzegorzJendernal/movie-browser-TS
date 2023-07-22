import { useEffect } from "react";
import { useReplaceQueryParameter } from "../utils/queryParameters";
import { Arrow, Button, ButtonsBox, Text, Wrapper } from "./pagination.styled";

const Pagination = ({
  page,
  setPage,
  totalPages,
}: {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
}) => {
  const totalPagesNumber = totalPages > 500 ? 500 : totalPages;
  const setNextPage = () => setPage((old) => old + 1);
  const setFirstPage = () => setPage(1);
  const setLastPage = () => setPage(totalPagesNumber);
  const setPreviousPage = () => setPage((old) => old - 1);
  const replaceQueryParameter = useReplaceQueryParameter();

  useEffect(() => {
    replaceQueryParameter({
      key: "page",
      value: page === 1 ? undefined : `${page}`,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <Wrapper>
      <ButtonsBox>
        <Button disabled={page === 1} onClick={setFirstPage}>
          <Arrow rotate />
          <Arrow rotate mobile />
          <Text>first</Text>
        </Button>
        <Button disabled={page === 1} onClick={setPreviousPage}>
          <Arrow rotate />
          <Text>previous</Text>
        </Button>
      </ButtonsBox>
      <span>Page 1 of {totalPagesNumber}</span>
      <ButtonsBox>
        <Button disabled={page === totalPagesNumber} onClick={setNextPage}>
          <Arrow />
          <Text>next</Text>
        </Button>
        <Button disabled={page === totalPagesNumber} onClick={setLastPage}>
          <Arrow />
          <Arrow mobile />
          <Text>last</Text>
        </Button>
      </ButtonsBox>
    </Wrapper>
  );
};

export default Pagination;
