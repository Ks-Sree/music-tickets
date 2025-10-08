import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function TicketManager() {
  const [tickets, setTickets] = useState(() => {
    return JSON.parse(localStorage.getItem("tickets")) || [];
  });
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("tickets", JSON.stringify(tickets));
  }, [tickets]);

  const handleAdd = () => {
    if (!type || !price || !quantity) return alert("Please fill all fields!");

    const newTicket = { type, price, quantity };
    if (editIndex !== null) {
      const updated = [...tickets];
      updated[editIndex] = newTicket;
      setTickets(updated);
      setEditIndex(null);
    } else {
      setTickets([...tickets, newTicket]);
    }

    setType("");
    setPrice("");
    setQuantity("");
  };

  const handleEdit = (index) => {
    const t = tickets[index];
    setType(t.type);
    setPrice(t.price);
    setQuantity(t.quantity);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setTickets(tickets.filter((_, i) => i !== index));
  };

  return (
    
    <div className="manager-page">
      <header>
        <h1>🎟️ Ticket Manager</h1>
        <button className="back-btn" onClick={() => navigate("/")}>
          ⬅ Back to Home
        </button>
      </header>

      <div className="ticket-form">
        <h2>{editIndex !== null ? "Edit Ticket" : "Add New Ticket"}</h2>
        <input
          type="text"
          placeholder="Ticket Type (VIP, General...)"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price (₹)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button onClick={handleAdd}>
          {editIndex !== null ? "Update Ticket" : "Add Ticket"}
        </button>
      </div>

      <div className="ticket-list">
        <h2>Available Tickets</h2>
        {tickets.length === 0 ? (
          <p>No tickets added yet.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Price (₹)</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((t, i) => (
                <tr key={i}>
                  <td>{t.type}</td>
                  <td>{t.price}</td>
                  <td>{t.quantity}</td>
                  <td>
                    <button className="edit" onClick={() => handleEdit(i)}>
                      Edit
                    </button>
                    <button className="delete" onClick={() => handleDelete(i)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default TicketManager;
