
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { MapPin, CheckSquare, Plus, Trash2, Package, Edit } from "lucide-react"
import useApi from "@/hooks/useApi"
import Loading from "@/components/shared/Loading"
import PackagingList from "@/components/packagingComponents/PackagingList"

export default function PackingPage() {

    const { data: trips, error, loading } = useApi("/trips");

    const [selectedTripId, setSelectedTripId] = useState("");

    if (loading) return <Loading />

    return (
        <div className="min-h-screen bg-gray-50 ">

            <div className="container mx-auto px-20 py-8">
                {/* Page Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Packing Lists</h1>
                    <p className="text-gray-600">Organize and track your travel essentials</p>
                </div>

                {/* Trip Selection */}
                <div className="mb-8">
                    <Label htmlFor="trip-select" className="text-sm font-medium mb-2 block">
                        Select Trip
                    </Label>
                    <Select value={selectedTripId} onValueChange={(value) => {
                        setSelectedTripId(value);
                    }}>
                        <SelectTrigger id="trip-select" className="w-full max-w-md">
                            <SelectValue placeholder="Select a trip" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value={null}>Select a trip</SelectItem>
                            {trips.map((trip) => (
                                <SelectItem key={trip._id} value={trip._id}>
                                    {trip.title} 
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                </div>

                {selectedTripId ? (
                    <PackagingList selectedTripId={selectedTripId} />
                ) : (
                    <Card>
                        <CardContent className="text-center py-12">
                            <CheckSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-lg font-medium text-gray-900 mb-2">No trip selected</h3>
                            <p className="text-gray-600 mb-4">Select a trip to view and manage its packing list</p>
                            <Button>
                                <Plus className="mr-2 h-4 w-4" />
                                Plan Your First Trip
                            </Button>
                        </CardContent>
                    </Card>
                )}
            </div>
        </div>
    )
}
