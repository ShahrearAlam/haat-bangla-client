import { apiSlice } from "../api/apiSlice";

const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    createPayment: builder.mutation({
      query: (data) => ({
        url: `/frontend/bkash/payment-create`,
        method: "POST",
        body: data
      })
    }),

    getOrdersByUserId: builder.query({
      query: (userId) => ({
        url: `/frontend/order/get-orders/${userId}`,
      })
    }),

    refundRequest: builder.mutation({
      query: (data) => ({
        url: `/frontend/refund/add-refund`,
        method: "POST",
        body: data
      })
    })

  })
})


// Export hooks for using the defined API endpoints
export const {
  useCreatePaymentMutation,
  useGetOrdersByUserIdQuery,
  useRefundRequestMutation
} = orderApiSlice
