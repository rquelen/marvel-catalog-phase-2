import React from "react";
import { Pagination } from "./Pagination";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const defaultProps = {
  pagination: {
    currentPage: 1,
    lastPage: 1,
  },
  goPage: () => null,
};

describe("Pagination component", () => {
  it("should display current page and all buttons on a middle page", () => {
    // given
    const props = {
      ...defaultProps,
      pagination: {
        currentPage: 2,
        lastPage: 3,
      },
    };

    // when
    render(<Pagination {...props} />);

    // then
    expect(screen.getByText("Page 2")).toBeInTheDocument();
    expect(screen.getByTestId("first")).toBeInTheDocument();
    expect(screen.getByTestId("previous")).toBeInTheDocument();
    expect(screen.getByTestId("next")).toBeInTheDocument();
    expect(screen.getByTestId("last")).toBeInTheDocument();
  });

  it("should not display first and previous buttons on first page", () => {
    // given
    const props = {
      ...defaultProps,
      pagination: {
        currentPage: 1,
        lastPage: 3,
      },
    };

    // when
    render(<Pagination {...props} />);

    // then
    expect(screen.getByText("Page 1")).toBeInTheDocument();
    expect(screen.queryAllByTestId("first")).toHaveLength(0);
    expect(screen.queryAllByTestId("previous")).toHaveLength(0);
    expect(screen.getByTestId("next")).toBeInTheDocument();
    expect(screen.getByTestId("last")).toBeInTheDocument();
  });

  it("should not display next and last buttons on last page", () => {
    // given
    const props = {
      ...defaultProps,
      pagination: {
        currentPage: 3,
        lastPage: 3,
      },
    };

    // when
    render(<Pagination {...props} />);

    // then
    expect(screen.getByText("Page 3")).toBeInTheDocument();
    expect(screen.getByTestId("first")).toBeInTheDocument();
    expect(screen.getByTestId("previous")).toBeInTheDocument();
    expect(screen.queryAllByTestId("next")).toHaveLength(0);
    expect(screen.queryAllByTestId("last")).toHaveLength(0);
  });

  it("should go to first page on first page button click", async () => {
    // given
    const props = {
      goPage: jest.fn(),
      pagination: {
        currentPage: 3,
        lastPage: 5,
      },
    };
    render(<Pagination {...props} />);

    // when
    await userEvent.click(screen.getByTestId("first"));

    // then
    expect(props.goPage).toHaveBeenCalledWith(1);
  });

  it("should go to previous page on previous page button click", async () => {
    // given
    const props = {
      goPage: jest.fn(),
      pagination: {
        currentPage: 3,
        lastPage: 5,
      },
    };
    render(<Pagination {...props} />);

    // when
    await userEvent.click(screen.getByTestId("previous"));

    // then
    expect(props.goPage).toHaveBeenCalledWith(2);
  });

  it("should go to next page on next page button click", async () => {
    // given
    const props = {
      goPage: jest.fn(),
      pagination: {
        currentPage: 3,
        lastPage: 5,
      },
    };
    render(<Pagination {...props} />);

    // when
    await userEvent.click(screen.getByTestId("next"));

    // then
    expect(props.goPage).toHaveBeenCalledWith(4);
  });

  it("should go to last page on last page button click", async () => {
    // given
    const props = {
      goPage: jest.fn(),
      pagination: {
        currentPage: 3,
        lastPage: 5,
      },
    };
    render(<Pagination {...props} />);

    // when
    await userEvent.click(screen.getByTestId("last"));

    // then
    expect(props.goPage).toHaveBeenCalledWith(5);
  });
});
