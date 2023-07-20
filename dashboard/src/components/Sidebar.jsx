import React from 'react'

const Sidebar = () => {
  return (
    <>  <aside>
    <div className="sidebar left ">
      <div className="user-panel">
        <div className="pull-left image">
          <img src="http://via.placeholder.com/160x160" className="rounded-circle" alt="User Image" />
        </div>
        <div className="pull-left info">
          <p>bootstrap develop</p>
          <a href="#"><i className="fa fa-circle text-success" /> Online</a>
        </div>
      </div>
      <ul className="list-sidebar bg-defoult">
        <li> <a href="#" data-toggle="collapse" data-target="#dashboard" className="collapsed active"> <i className="fa fa-th-large" /> <span className="nav-label"> Dashboards </span> <span className="fa fa-chevron-left pull-right" /> </a>
          <ul className="sub-menu collapse" id="dashboard">
            <li className="active"><a href="#">CSS3 Animation</a></li>
            <li><a href="#">General</a></li>
            <li><a href="#">Buttons</a></li>
            <li><a href="#">Tabs &amp; Accordions</a></li>
            <li><a href="#">Typography</a></li>
            <li><a href="#">FontAwesome</a></li>
            <li><a href="#">Slider</a></li>
            <li><a href="#">Panels</a></li>
            <li><a href="#">Widgets</a></li>
            <li><a href="#">Bootstrap Model</a></li>
          </ul>
        </li>
        <li> <a href="#"><i className="fa fa-diamond" /> <span className="nav-label">Layouts</span></a> </li>
        <li> <a href="#" data-toggle="collapse" data-target="#products" className="collapsed active"> <i className="fa fa-bar-chart-o" /> <span className="nav-label">Graphs</span> <span className="fa fa-chevron-left pull-right" /> </a>
          <ul className="sub-menu collapse" id="products">
            <li className="active"><a href="#">CSS3 Animation</a></li>
            <li><a href="#">General</a></li>
            <li><a href="#">Buttons</a></li>
            <li><a href="#">Tabs &amp; Accordions</a></li>
            <li><a href="#">Typography</a></li>
            <li><a href="#">FontAwesome</a></li>
            <li><a href="#">Slider</a></li>
            <li><a href="#">Panels</a></li>
            <li><a href="#">Widgets</a></li>
            <li><a href="#">Bootstrap Model</a></li>
          </ul>
        </li>
        <li> <a href="#"><i className="fa fa-laptop" /> <span className="nav-label">Grid options</span></a> </li>
        <li> <a href="#" data-toggle="collapse" data-target="#tables" className="collapsed active"><i className="fa fa-table" /> <span className="nav-label">Tables</span><span className="fa fa-chevron-left pull-right" /></a>
          <ul className="sub-menu collapse" id="tables">
            <li><a href> Static Tables</a></li>
            <li><a href> Data Tables</a></li>
            <li><a href> Foo Tables</a></li>
            <li><a href> jqGrid</a></li>
          </ul>
        </li>
        <li> <a href="#" data-toggle="collapse" data-target="#e-commerce" className="collapsed active"><i className="fa fa-shopping-cart" /> <span className="nav-label">E-commerce</span><span className="fa fa-chevron-left pull-right" /></a>
          <ul className="sub-menu collapse" id="e-commerce">
            <li><a href> Products grid</a></li>
            <li><a href> Products list</a></li>
            <li><a href>Product edit</a></li>
            <li><a href> Product detail</a></li>
            <li><a href>Cart</a></li>
            <li><a href> Orders</a></li>
            <li><a href> Credit Card form</a> </li>
          </ul>
        </li>
        <li> <a href><i className="fa fa-pie-chart" /> <span className="nav-label">Metrics</span> </a></li>
        <li> <a href="#"><i className="fa fa-files-o" /> <span className="nav-label">Other Pages</span></a> </li>
        <li> <a href="#"><i className="fa fa-files-o" /> <span className="nav-label">Other Pages</span></a> </li>
        <li> <a href="#"><i className="fa fa-files-o" /> <span className="nav-label">Other Pages</span></a> </li>
        <li> <a href="#"><i className="fa fa-files-o" /> <span className="nav-label">Other Pages</span></a> </li>
        <li> <a href="#"><i className="fa fa-files-o" /> <span className="nav-label">Other Pages</span></a> </li>
      </ul>
    </div>
  </aside></>
  )
}

export default Sidebar