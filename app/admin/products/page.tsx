'use client';

import { useState } from 'react';

export default function AdminProducts() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: '',
    description: '',
    stock: '',
    image: null as File | null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Product Data:', formData);
    alert('Product added successfully!');
    setShowAddForm(false);
    setFormData({
      name: '',
      price: '',
      category: '',
      description: '',
      stock: '',
      image: null
    });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-2 px-0" style={{minHeight: '100vh', backgroundColor: '#2f2f2f'}}>
          <div className="p-4">
            <h4 className="text-white mb-4" style={{fontWeight: '700'}}>Admin Panel</h4>
            <div className="list-group list-group-flush">
              <a href="/admin" className="list-group-item list-group-item-action border-0 px-0 py-3 text-white" 
                 style={{opacity: 0.8}}>
                <i className="me-2">📊</i> Dashboard
              </a>
              <a href="/admin/products" className="list-group-item list-group-item-action border-0 px-0 py-3 text-white" 
                 style={{backgroundColor: '#3b5d50'}}>
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
            <h3 style={{color: '#2f2f2f', fontWeight: '600'}}>Manage Products</h3>
            <button 
              className="btn" 
              style={{backgroundColor: '#3b5d50', color: '#fff'}}
              onClick={() => setShowAddForm(!showAddForm)}
            >
              {showAddForm ? '✕ Cancel' : '+ Add Product'}
            </button>
          </div>

          {/* Add Product Form */}
          {showAddForm && (
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h5 className="mb-4" style={{color: '#2f2f2f', fontWeight: '600'}}>Add New Product</h5>
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label" style={{fontWeight: '500'}}>Product Name *</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter product name"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label" style={{fontWeight: '500'}}>Price *</label>
                      <input 
                        type="number" 
                        className="form-control" 
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        required
                        placeholder="0.00"
                        step="0.01"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label" style={{fontWeight: '500'}}>Category *</label>
                      <select 
                        className="form-select" 
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select Category</option>
                        <option value="sofa">Sofa</option>
                        <option value="chair">Chair</option>
                        <option value="table">Table</option>
                        <option value="bed">Bed</option>
                        <option value="lamp">Lamp</option>
                        <option value="shelf">Shelf</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label" style={{fontWeight: '500'}}>Stock Quantity *</label>
                      <input 
                        type="number" 
                        className="form-control" 
                        name="stock"
                        value={formData.stock}
                        onChange={handleInputChange}
                        required
                        placeholder="0"
                      />
                    </div>
                    <div className="col-md-12">
                      <label className="form-label" style={{fontWeight: '500'}}>Description</label>
                      <textarea 
                        className="form-control" 
                        rows={3}
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Enter product description"
                      ></textarea>
                    </div>
                    <div className="col-md-12">
                      <label className="form-label" style={{fontWeight: '500'}}>Product Image</label>
                      <input 
                        type="file" 
                        className="form-control" 
                        accept="image/*"
                        onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.files?.[0] || null }))}
                      />
                      <small className="text-muted">Upload product image (JPG, PNG)</small>
                    </div>
                    <div className="col-md-12">
                      <button type="submit" className="btn" style={{backgroundColor: '#3b5d50', color: '#fff'}}>
                        Add Product
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Products Table */}
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <h5 className="mb-4" style={{color: '#2f2f2f', fontWeight: '600'}}>All Products</h5>
              
              <div className="table-responsive">
                <table className="table table-hover align-middle">
                  <thead style={{backgroundColor: '#f0f7f4'}}>
                    <tr>
                      <th style={{color: '#3b5d50', fontWeight: '600'}}>Image</th>
                      <th style={{color: '#3b5d50', fontWeight: '600'}}>Name</th>
                      <th style={{color: '#3b5d50', fontWeight: '600'}}>Category</th>
                      <th style={{color: '#3b5d50', fontWeight: '600'}}>Price</th>
                      <th style={{color: '#3b5d50', fontWeight: '600'}}>Stock</th>
                      <th style={{color: '#3b5d50', fontWeight: '600'}}>Status</th>
                      <th style={{color: '#3b5d50', fontWeight: '600'}}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><img src="/images/product-1.png" alt="Product" style={{width: '50px', height: '50px', objectFit: 'cover', borderRadius: '4px'}} /></td>
                      <td style={{fontWeight: '600'}}>Modern Sofa Set</td>
                      <td>Sofa</td>
                      <td style={{fontWeight: '600', color: '#3b5d50'}}>$299.99</td>
                      <td>25</td>
                      <td><span className="badge" style={{backgroundColor: '#3b5d50', color: '#fff'}}>Active</span></td>
                      <td>
                        <button className="btn btn-sm btn-outline-primary me-1">Edit</button>
                        <button className="btn btn-sm btn-outline-danger">Delete</button>
                      </td>
                    </tr>
                    <tr>
                      <td><img src="/images/product-2.png" alt="Product" style={{width: '50px', height: '50px', objectFit: 'cover', borderRadius: '4px'}} /></td>
                      <td style={{fontWeight: '600'}}>Dining Table Chair</td>
                      <td>Chair</td>
                      <td style={{fontWeight: '600', color: '#3b5d50'}}>$149.50</td>
                      <td>18</td>
                      <td><span className="badge" style={{backgroundColor: '#3b5d50', color: '#fff'}}>Active</span></td>
                      <td>
                        <button className="btn btn-sm btn-outline-primary me-1">Edit</button>
                        <button className="btn btn-sm btn-outline-danger">Delete</button>
                      </td>
                    </tr>
                    <tr>
                      <td><img src="/images/product-3.png" alt="Product" style={{width: '50px', height: '50px', objectFit: 'cover', borderRadius: '4px'}} /></td>
                      <td style={{fontWeight: '600'}}>Office Desk Lamp</td>
                      <td>Lamp</td>
                      <td style={{fontWeight: '600', color: '#3b5d50'}}>$89.99</td>
                      <td>0</td>
                      <td><span className="badge" style={{backgroundColor: '#dc3545', color: '#fff'}}>Out of Stock</span></td>
                      <td>
                        <button className="btn btn-sm btn-outline-primary me-1">Edit</button>
                        <button className="btn btn-sm btn-outline-danger">Delete</button>
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
