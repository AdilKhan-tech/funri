export default function AdminDashboard() {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-2 px-0" style={{minHeight: '100vh', backgroundColor: '#2f2f2f'}}>
          <div className="p-4">
            <h4 className="text-white mb-4" style={{fontWeight: '700'}}>Admin Panel</h4>
            <div className="list-group list-group-flush">
              <a href="/admin" className="list-group-item list-group-item-action border-0 px-0 py-3 text-white" 
                 style={{backgroundColor: '#3b5d50'}}>
                <i className="me-2">📊</i> Dashboard
              </a>
              <a href="/admin/products" className="list-group-item list-group-item-action border-0 px-0 py-3 text-white" 
                 style={{opacity: 0.8}}>
                <i className="me-2">📦</i> Products
              </a>
              <a href="/admin/orders" className="list-group-item list-group-item-action border-0 px-0 py-3 text-white" 
                 style={{opacity: 0.8}}>
                <i className="me-2">🛒</i> Orders
              </a>
              <a href="/admin/customers" className="list-group-item list-group-item-action border-0 px-0 py-3 text-white" 
                 style={{opacity: 0.8}}>
                <i className="me-2">👥</i> Customers
              </a>
              <a href="/admin/categories" className="list-group-item list-group-item-action border-0 px-0 py-3 text-white" 
                 style={{opacity: 0.8}}>
                <i className="me-2">🏷️</i> Categories
              </a>
              <hr className="text-white" />
              <a href="/" className="list-group-item list-group-item-action border-0 px-0 py-3 text-danger">
                <i className="me-2">🚪</i> Logout
              </a>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-md-10 p-4" style={{backgroundColor: '#eff2f1'}}>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 style={{color: '#2f2f2f', fontWeight: '600'}}>Dashboard Overview</h3>
            <div className="text-muted">Welcome, Admin</div>
          </div>

          {/* Stats Cards */}
          <div className="row g-4 mb-4">
            <div className="col-md-3">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <p className="text-muted mb-1" style={{fontSize: '14px'}}>Total Products</p>
                      <h3 className="mb-0" style={{color: '#3b5d50', fontWeight: '700'}}>48</h3>
                    </div>
                    <div style={{fontSize: '40px'}}>📦</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <p className="text-muted mb-1" style={{fontSize: '14px'}}>Total Orders</p>
                      <h3 className="mb-0" style={{color: '#3b5d50', fontWeight: '700'}}>156</h3>
                    </div>
                    <div style={{fontSize: '40px'}}>🛒</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <p className="text-muted mb-1" style={{fontSize: '14px'}}>Customers</p>
                      <h3 className="mb-0" style={{color: '#3b5d50', fontWeight: '700'}}>89</h3>
                    </div>
                    <div style={{fontSize: '40px'}}>👥</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <p className="text-muted mb-1" style={{fontSize: '14px'}}>Revenue</p>
                      <h3 className="mb-0" style={{color: '#3b5d50', fontWeight: '700'}}>$12,456</h3>
                    </div>
                    <div style={{fontSize: '40px'}}>💰</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Orders */}
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h5 className="mb-0" style={{color: '#2f2f2f', fontWeight: '600'}}>Recent Orders</h5>
                <a href="/admin/orders" className="btn btn-sm" style={{backgroundColor: '#3b5d50', color: '#fff'}}>View All</a>
              </div>
              
              <div className="table-responsive">
                <table className="table table-hover align-middle">
                  <thead style={{backgroundColor: '#f0f7f4'}}>
                    <tr>
                      <th style={{color: '#3b5d50', fontWeight: '600'}}>Order ID</th>
                      <th style={{color: '#3b5d50', fontWeight: '600'}}>Customer</th>
                      <th style={{color: '#3b5d50', fontWeight: '600'}}>Date</th>
                      <th style={{color: '#3b5d50', fontWeight: '600'}}>Total</th>
                      <th style={{color: '#3b5d50', fontWeight: '600'}}>Status</th>
                      <th style={{color: '#3b5d50', fontWeight: '600'}}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{fontWeight: '600'}}>#ORD-2024-001</td>
                      <td>John Doe</td>
                      <td>Apr 1, 2024</td>
                      <td style={{fontWeight: '600', color: '#3b5d50'}}>$299.99</td>
                      <td><span className="badge" style={{backgroundColor: '#3b5d50', color: '#fff'}}>Delivered</span></td>
                      <td>
                        <button className="btn btn-sm btn-outline-secondary">View</button>
                      </td>
                    </tr>
                    <tr>
                      <td style={{fontWeight: '600'}}>#ORD-2024-002</td>
                      <td>Jane Smith</td>
                      <td>Mar 28, 2024</td>
                      <td style={{fontWeight: '600', color: '#3b5d50'}}>$149.50</td>
                      <td><span className="badge" style={{backgroundColor: '#f9bf29', color: '#2f2f2f'}}>Shipped</span></td>
                      <td>
                        <button className="btn btn-sm btn-outline-secondary">View</button>
                      </td>
                    </tr>
                    <tr>
                      <td style={{fontWeight: '600'}}>#ORD-2024-003</td>
                      <td>Mike Johnson</td>
                      <td>Mar 25, 2024</td>
                      <td style={{fontWeight: '600', color: '#3b5d50'}}>$89.99</td>
                      <td><span className="badge" style={{backgroundColor: '#6c757d', color: '#fff'}}>Processing</span></td>
                      <td>
                        <button className="btn btn-sm btn-outline-secondary">View</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
