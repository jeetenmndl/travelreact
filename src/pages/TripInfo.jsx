import api from '@/api/axios';
import Loading from '@/components/shared/Loading';
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import useApi from '@/hooks/useApi';
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'sonner';

const TripInfo = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const {data, error, loading} = useApi(`/trips/${id}`);

    if (loading) return <Loading text='Loading trip details...' />
    console.log(data);

    const deleteTrip = async () => {
        try{
            const response = await api.delete(`/trips/${id}`);
            toast.success("Trip deleted successfully!");
            navigate('/trips');
        }catch(err){
            console.error(err);
            toast.error("Some error occured");
        }
    }

  return (
    <main className='py-4 px-20 grid grid-cols-1 lg:grid-cols-3 gap-6'>
        <Card>
            <CardHeader>
                <CardTitle>this is title</CardTitle>
                <div className='mt-4 flex gap-2'>
                    <a href={`/trips/edit/${data._id}`}><Button variant='outline'>Edit Trip</Button></a>

                    <Button variant='destructive' onClick={deleteTrip}>Delete Trip</Button>
                </div>
            </CardHeader>
            <CardContent>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas perspiciatis consequuntur delectus velit dolorem corrupti dignissimos tenetur. Laboriosam debitis aperiam ducimus reiciendis labore vero dolor sint at non. Esse, est.</p>
            </CardContent>
        </Card>

    </main>
  )
}

export default TripInfo