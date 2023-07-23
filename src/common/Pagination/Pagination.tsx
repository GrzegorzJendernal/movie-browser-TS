import { useQueryParameter, useReplaceQueryParameter } from "../utils/queryParameters";
import { Arrow, Button, ButtonsBox, Text, Wrapper } from "./pagination.styled";

const Pagination = ({
  // page,
  // setPage,
  totalPages,
}: {
  // page: number;
  // setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
}) => {
  const replaceQueryParameter = useReplaceQueryParameter();
  const queryParameter = useQueryParameter("page");
  const page = queryParameter ? +queryParameter : 1;

  const setPage = (page: number) => {
    replaceQueryParameter({
      key: "page",
      value: page === 1 ? undefined : `${page}`,
    });
  };
  const totalPagesNumber = totalPages > 500 ? 500 : totalPages;
  const setNextPage = () => {
    if (page < totalPagesNumber) setPage(page + 1);
  };
  const setFirstPage = () => setPage(1);
  const setLastPage = () => setPage(totalPagesNumber);
  const setPreviousPage = () => {
    if (page !== 1) setPage(page - 1);
  };

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
