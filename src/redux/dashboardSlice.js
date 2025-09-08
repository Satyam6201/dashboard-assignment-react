import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [
    {
      id: 1,
      name: "CSPM Executive Dashboard",
      widgets: [
        { id: 101, name: "Widget A", text: "Sample text for Widget A" },
        { id: 102, name: "Widget B", text: "Sample text for Widget B" },
      ],
    },
    {
      id: 2,
      name: "Network Security Dashboard",
      widgets: [
        { id: 201, name: "Widget X", text: "Sample text for Widget X" },
      ],
    },
  ],
  searchTerm: "",
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    addWidget: (state, action) => {
      const { categoryId, widget } = action.payload;
      const category = state.categories.find((c) => c.id === categoryId);
      if (category) {
        category.widgets.push(widget);
      }
    },
    removeWidget: (state, action) => {
      const { categoryId, widgetId } = action.payload;
      const category = state.categories.find((c) => c.id === categoryId);
      if (category) {
        category.widgets = category.widgets.filter((w) => w.id !== widgetId);
      }
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { addWidget, removeWidget, setSearchTerm } =
  dashboardSlice.actions;
export default dashboardSlice.reducer;
