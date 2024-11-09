import { apiSlice } from "../api/apiSlice";

const contestApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getAllContests: builder.query({
      query: ({ page, limit }) => ({
        url: `/frontend/contest/get-contests?page=${page}&limit=${limit}`,
      }),
      providesTags: ['contests']
    }),

    addParticipant: builder.mutation({
      query: (data) => ({
        url: `/frontend/contest/add-participant`,
        method: 'POST',
        body: data,
        formData: true
      }),
      invalidatesTags: ['contests']
    }),

  })
})


// Export hooks for using the defined API endpoints
export const {
  useGetAllContestsQuery,
  useAddParticipantMutation
} = contestApiSlice
