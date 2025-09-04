import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { MapPin, CheckSquare, Plus, Trash2, Package, Edit } from "lucide-react"
import api from "@/api/axios"
import useApi from "@/hooks/useApi"
import Loading from "../shared/Loading"

const PackagingList = ({selectedTripId}) => {

    const {loading, error, data:packingItems} = useApi(`/package-lists/${selectedTripId}`);

    const [isAddingItem, setIsAddingItem] = useState(false);
    const [newItemName, setNewItemName] = useState("");

const addPackingItem = ()=>{
    console.log(newItemName)
    setIsAddingItem(false);
}
    


const getDateDisplay = (dateString) => {
    if (!dateString) return "No date"
    try {
      return new Date(dateString).toLocaleDateString()
    } catch {
      return "Invalid date"
    }
  }

  if(loading) return <Loading />
  
  return (
     <div className="space-y-6">
            {/* Trip Info & Progress */}
            

            {/* Add Item Button */}
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Packing Items</h2>
              <Dialog open={isAddingItem} onOpenChange={setIsAddingItem}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Item
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add Packing Item</DialogTitle>
                    <DialogDescription>Add a new item to your packing list</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="item-name">Item Name</Label>
                      <Input
                        id="item-name"
                        value={newItemName}
                        onChange={(e) => setNewItemName(e.target.value)}
                        placeholder="Enter item name (e.g., T-shirts (3), Passport, etc.)"
                      />
                    </div>
                    <div className="flex justify-end space-x-2">
                      <Button
                        variant="outline"
                        onClick={() => {
                          setIsAddingItem(false)
                          setNewItemName("")
                        }}
                      >
                        Cancel
                      </Button>
                      <Button onClick={addPackingItem}>
                        Add Item
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Packing Items */}
            <div className="space-y-4">
              {packingItems.length === 0 ? (
                <Card>
                  <CardContent className="text-center py-12">
                    <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No items found</h3>
                    <p className="text-gray-600 mb-4">Start adding items to your packing list</p>
                    <Button onClick={() => setIsAddingItem(true)}>
                      <Plus className="mr-2 h-4 w-4" />
                      Add First Item
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid gap-4">
                  {packingItems.map((item) => (
                    <Card
                      key={item._id}
                      className={`transition-all ${item.completed ? "bg-green-50 border-green-200" : ""}`}
                    >
                      {item.name}
                    </Card>
                  ))}
                </div>
              )}
            </div>

          </div>
  )
}

export default PackagingList