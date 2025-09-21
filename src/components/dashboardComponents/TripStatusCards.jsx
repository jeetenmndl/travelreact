import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import useApi from '@/hooks/useApi'
import Loading from '../shared/Loading'

const TripStatusCards = () => {

    const {data: trips, loading, error} = useApi('/trips')

    if(loading) return <Loading />
    if(error) return <p>Error loading trips</p>

    return (
        <section className='my-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                <Card>
                    <CardHeader>
                        <CardTitle>Total Trips</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div>
                            <p className='text-4xl font-semibold'>{trips?.length}</p>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Ongoing Trips</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div>
                            <p className='text-4xl font-semibold'>5</p>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Upcoming Trips</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div>
                            <p className='text-4xl font-semibold'>5</p>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Completed Trips</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div>
                            <p className='text-4xl font-semibold'>5</p>
                        </div>
                    </CardContent>
                </Card>

            </div>

        </section>
    )
}

export default TripStatusCards