import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Card from "../src/components/Card";

const mockRequest = {
  id: 6,
  title: "전동 킥보드 시제품 제작",
  client: "F 업체",
  due: "2020.12.09",
  count: 1,
  amount: 20,
  method: ["밀링"],
  material: ["강철"],
  status: "대기중" as const,
};

const onProcessRequest = {
  ...mockRequest,
  status: "상담중" as const,
};

describe("Card", () => {
  it("should render request", () => {
    const { getByText, getByRole } = render(<Card {...mockRequest} />);

    expect(getByText(mockRequest.title)).toBeInTheDocument();
    expect(getByText(mockRequest.client)).toBeInTheDocument();
    expect(getByText(`${mockRequest.due}까지 납기`)).toBeInTheDocument();
    expect(getByText(`${mockRequest.count}개`)).toBeInTheDocument();
    expect(getByText(`${mockRequest.amount}개`)).toBeInTheDocument();
    expect(getByRole("button", { name: "요청 내역 보기" })).toBeInTheDocument();
    expect(getByRole("button", { name: "채팅하기" })).toBeInTheDocument();
  });

  it("should render status if request is on process", () => {
    const { getByText } = render(<Card {...onProcessRequest} />);

    expect(getByText("상담중")).toBeInTheDocument();
  });
});
