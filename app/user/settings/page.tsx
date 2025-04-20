import Card from "@/components/ui/Card"

export default function UserSetings() {
  return (
    <div>
      <div className="cineverse-container py-8">
        <h1 className="font-bold text-4xl mb-6 md:mb-8">Account Settings</h1>
        <Card title="Profile Settings">
       
            <form className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered w-full"
                  defaultValue="Staff User"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="input input-bordered w-full"
                  defaultValue="your.email@example.com"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="tel"
                  placeholder="555-123-4567"
                  className="input input-bordered w-full"
                  defaultValue="555-123-4567"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your address"
                  className="input input-bordered w-full"
                  defaultValue="123 Main St"
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">City</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter city"
                    className="input input-bordered w-full"
                    defaultValue="Cineville"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">State</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter state"
                    className="input input-bordered w-full"
                    defaultValue="CA"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">ZIP Code</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter ZIP code"
                    className="input input-bordered w-full"
                    defaultValue="90210"
                  />
                </div>
              </div>

              <div className="card-actions justify-end mt-6">
                <button type="submit" className="btn btn-warning">
                  Save Changes
                </button>
              </div>
            </form>
    
        </Card>
      </div>
    </div>
  );
}
