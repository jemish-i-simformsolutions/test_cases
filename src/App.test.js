import { fireEvent, screen, waitFor } from "@testing-library/react";
import App from "./App";
import { customRender } from "./CustomFunctions/customRender";
import { configureStore } from "./redux/Strore";

//test case1
test("should render data from API", async () => {
  //writing test case on App.js component
  customRender(<App />, configureStore);

  //here waiting for list component to render as API response successfully
  const listElement = await waitFor(() =>
    screen.findByTestId(
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
    )
  );

  //expect some test from listing
  expect(listElement.textContent).toContain(
    "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
  );
  //user event to click list item with specific test id
  fireEvent.click(listElement);
  //wait for API response
  await waitFor(() => screen.findByTestId(2));
  //click on specific area
  fireEvent.click(screen.getByTestId(2));
  expect(screen.getByTestId("takeatest").textContent).toBe("2");
});
