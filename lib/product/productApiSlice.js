import { buildQueryParams } from "@/components/utils/QueryParamsHelper";
import { apiSlice } from "../api/apiSlice";

const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getAllSlot: builder.query({
      query: ({ userId, page, limit }) => ({
        url: `/frontend/product/get-slots/${userId}?page=${page}&limit=${limit}`,
      })
    }),

    addProduct: builder.mutation({
      query: (data) => ({
        url: `/frontend/product/add-product`,
        method: "POST",
        body: data,
        formData: true
      })
    }),

    updateProduct: builder.mutation({
      query: ({ productId, data }) => ({
        url: `/frontend/product/update-product/${productId}`,
        method: "PUT",
        body: data,
        formData: true
      })
    }),

    getAllProduct: builder.query({
      query: (data) => {
        let queryParams = buildQueryParams(data)
        return { url: `/frontend/product/get-products?${queryParams}` };
      }
    }),

    getSingleProduct: builder.query({
      query: ({ productId, userId }) => ({
        url: `/frontend/product/get-product/${productId}?userId=${userId}`
      })
    }),

    // Get a blog in save page.
    getSaveProducts: builder.query({
      query: ({ page, limit }) => ({
        url: `/frontend/product/saved?page=${page}&limit=${limit}`
      })
    }),

    // Add a blog in save page.
    saveProduct: builder.mutation({
      query: (productId) => ({
        url: `/frontend/product/save/${productId}`,
        method: 'POST'
      })
    }),

    // Delete save blog in save page.
    deleteSaveProduct: builder.mutation({
      query: (productId) => ({
        url: `/frontend/product/unsave/${productId}`,
        method: 'DELETE'
      })
    }),

    // Get a blog in save page.
    addViewData: builder.mutation({
      query: (data) => ({
        url: `/frontend/view/add-product-view`,
        method: 'POST',
        body: data
      })
    }),

  })
})


// Export hooks for using the defined API endpoints
export const {
  useGetAllSlotQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useGetAllProductQuery,
  useGetSingleProductQuery,
  useGetSaveProductsQuery,
  useSaveProductMutation,
  useDeleteSaveProductMutation,
  useAddViewDataMutation
} = productApiSlice
