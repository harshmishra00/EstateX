import React, { Suspense } from 'react';
import "./allApartments.scss";
import Filter from "../filter/Filter";
import Card from "../card/Card";
import { useLoaderData, Await } from "react-router-dom";

function AllApartments() {
    const data = useLoaderData();

    return (
        <div className="allApartments">
            <div className="sidebar">
                <Filter />
            </div>
            <div className="postsContainer">
                <div className="wrapper">
                    <div className="mb-6">
                        <h1 className="text-3xl font-bold text-gray-900">All Properties</h1>
                        <p className="text-gray-500 mt-2">Browse our complete collection of verified listings.</p>
                    </div>

                    <Suspense fallback={<p className="text-center py-10">Loading properties...</p>}>
                        <Await
                            resolve={data.postResponse}
                            errorElement={<p className="text-center text-red-500 py-10">Error loading posts!</p>}
                        >
                            {(postResponse) =>
                                postResponse.data.length > 0 ? (
                                    postResponse.data.map((post) => (
                                        <Card key={post.id} item={post} />
                                    ))
                                ) : (
                                    <p className="text-center text-gray-500 py-10">No properties found matching your criteria.</p>
                                )
                            }
                        </Await>
                    </Suspense>
                </div>
            </div>
        </div>
    );
}

export default AllApartments;
