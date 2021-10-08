import { fireEvent, screen, waitFor } from "@testing-library/react";
import { customRender } from "../CustomFunctions/customRender";
import { configureStore } from "../redux/Strore";
import ProductListing from "./ProductListing";

//test-case1
test("should work perfectly", async () => {
  customRender(<ProductListing />, configureStore);
  //wait for api response
  await waitFor(() => screen.getByTestId(2));
  //after api response event will fire
  fireEvent.click(screen.getByTestId(2));
  //final execution
  expect(screen.getByTestId("takeatest").textContent).toBe("2");
});
