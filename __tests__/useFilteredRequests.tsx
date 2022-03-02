import "@testing-library/jest-dom";
import { renderHook } from "@testing-library/react-hooks";
import { fireEvent, render } from "@testing-library/react";

import useFilteredRequests from "../src/hooks/useFilteredRequests";
import { requests } from "../requests.json";

jest.mock("../src/api/getRequests", () => ({
  default: jest.fn(() => Promise.resolve(requests)),
}));

describe("useFilteredRequests", () => {
  it("should return requests and filterBar", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFilteredRequests());
    await waitForNextUpdate();

    expect(result.current[0]).toEqual(requests);

    const { getByText } = render(result.current[1]);

    expect(getByText("가공방식")).toBeInTheDocument();
    expect(getByText("재료")).toBeInTheDocument();
    expect(getByText("필터링 리셋")).toBeInTheDocument();
    expect(getByText("상담중인 요청만 보기")).toBeInTheDocument();
  });

  it("should return only on process requests if toggle button click", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFilteredRequests());
    await waitForNextUpdate();

    const { getByText } = render(result.current[1]);
    const $toggleButton = getByText("상담중인 요청만 보기").parentNode.firstChild;

    expect(result.current[0]).toEqual(requests);

    fireEvent.click($toggleButton);

    const onProcessRequests = requests.filter(({ status }) => status === "상담중");
    expect(result.current[0]).toEqual(onProcessRequests);
  });

  it("should return filtered requests if check options", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFilteredRequests());
    await waitForNextUpdate();

    const { getByText } = render(result.current[1]);
    const $filterCheckBox = getByText("밀링").firstChild;

    fireEvent.click($filterCheckBox);

    const filteredRequests = requests.filter(({ method }) => method.includes("밀링"));
    expect(result.current[0]).toEqual(filteredRequests);

    fireEvent.click($filterCheckBox);
    expect(result.current[0]).toEqual(requests);
  });

  it("should return all requests if click reset button", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFilteredRequests());
    await waitForNextUpdate();

    const { getByText } = render(result.current[1]);
    const $filterCheckBox = getByText("밀링").firstChild;
    const $resetButton = getByText("필터링 리셋");

    fireEvent.click($filterCheckBox);

    const filteredRequests = requests.filter(({ method }) => method.includes("밀링"));
    expect(result.current[0]).toEqual(filteredRequests);

    fireEvent.click($resetButton);
    expect(result.current[0]).toEqual(requests);
  });
});
