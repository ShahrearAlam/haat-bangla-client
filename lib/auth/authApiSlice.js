import { localDataSetter } from "@/components/utils/LocalStorage";
import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    // Register a new user (POST)
    register: builder.mutation({
      query: (data) => ({
        url: '/frontend/auth/register',
        method: 'POST',
        body: data
      })
    }),

    // Login a user (POST)
    login: builder.mutation({
      query: (data) => ({
        url: '/frontend/auth/login',
        method: 'POST',
        body: data
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          const { data } = result?.data || {};

          // Store authentication data in localStorage
          localDataSetter("haat-bangla", { accessToken: data.accessToken, refreshToken: data.refreshToken })

          // Dispatch userLoggedIn action
          dispatch(userLoggedIn({ accessToken: data.accessToken, user: data.user }))
        } catch (error) {
          console.error(error)
        }
      },
    }),

    // Verify phone with OTP (POST)
    phoneVerification: builder.mutation({
      query: (data) => ({
        url: '/frontend/auth/otp-verify',
        method: 'POST',
        body: data
      }),
      invalidatesTags: ["userInformation"],
    }),

    // Reset user's password (POST)
    resetPassword: builder.mutation({
      query: (data) => ({
        url: '/frontend/auth/reset-password',
        method: 'POST',
        body: data
      }),
    }),

    // Authenticate with a social provider (POST)
    socialAuth: builder.mutation({
      query: (data) => ({
        url: '/frontend/auth/social-auth',
        method: 'POST',
        body: data
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          const { data } = result?.data || {};

          // Store authentication data in localStorage
          localDataSetter("haat-bangla", { accessToken: data.accessToken, refreshToken: data.refreshToken })

          // Dispatch userLoggedIn action
          dispatch(userLoggedIn({ accessToken: data.accessToken, user: data.user }))
        } catch (error) {
          console.error(error)
        }
      },
    }),

  })
})


// Export hooks for using the defined API endpoints
export const {
  useRegisterMutation,
  useLoginMutation,
  usePhoneVerificationMutation,
  useResetPasswordMutation,
  useSocialAuthMutation
} = authApiSlice
