import { apiSlice } from "../api/apiSlice";

const packageApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getAllPackage: builder.query({
      query: ({ page, limit }) => ({
        url: `/frontend/package/get-packages?page=${page}&limit=${limit}`,
      })
    }),

    getSinglePackage: builder.query({
      query: (packageId) => ({
        url: `/frontend/package/get-package/${packageId}`,
      })
    }),

  })
})


// Export hooks for using the defined API endpoints
export const {
  useGetAllPackageQuery,
  useGetSinglePackageQuery
} = packageApiSlice
