import { accessToken } from "@/components/utils/LocalStorage";
import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "../auth/authSlice";

const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    // Fetch user data (GET)
    userData: builder.query({
      query: () => ({
        url: `/frontend/user/get-user`
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          const { data } = result?.data || {};

          // Dispatch userLoggedIn action
          dispatch(userLoggedIn({ accessToken: accessToken(), user: data }))
        } catch (error) {
          console.error(error)
        }
      },
      providesTags: ["userInformation"],
    }),

    // Update user (PUT)
    updateUser: builder.mutation({
      query: (data) => ({
        url: '/frontend/user/update-user',
        method: 'PUT',
        body: data,
        FormData: true
      })
    }),

  })
})


// Export hooks for using the defined API endpoints
export const {
  useUserDataQuery,
  useUpdateUserMutation
} = authApiSlice
