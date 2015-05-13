'use strict';

var RecentActivities = React.createClass({
    render: function() {
        return (
            <div className="row">
                <div className="col-sm-12">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3 className="panel-title">Atividades Recentes</h3>
                        </div>
                        <div className="panel-body">
                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Atividade</th>
                                    <th>Status</th>
                                    <th>Descrição</th>
                                    <th>Data de Criação</th>
                                    <th>Ações</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>000001</td>
                                    <td><span className="label label-info">Pendente</span></td>
                                    <td>Pedido de orçamento</td>
                                    <td>-</td>
                                    <td>12/04/2015 12:32</td>
                                    <td>
                                        <button type="button" className="btn btn-xs btn-primary">iniciar a tarefa</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>000002</td>
                                    <td><span className="label label-info">Pendente</span></td>
                                    <td>Pedido de orçamento</td>
                                    <td>-</td>
                                    <td>12/04/2015 12:32</td>
                                    <td>
                                        <button type="button" className="btn btn-xs btn-primary">iniciar a tarefa</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>000003</td>
                                    <td><span className="label label-danger">Pendente</span></td>
                                    <td>Pedido de orçamento</td>
                                    <td>-</td>
                                    <td>12/04/2015 12:32</td>
                                    <td>
                                        <button type="button" className="btn btn-xs btn-primary">iniciar a tarefa</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>000004</td>
                                    <td><span className="label label-warning">Pendente</span></td>
                                    <td>Pedido de orçamento</td>
                                    <td>-</td>
                                    <td>12/04/2015 12:32</td>
                                    <td>
                                        <button type="button" className="btn btn-xs btn-primary">iniciar a tarefa</button>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});



React.render(
    <RecentActivities />,
    document.getElementById('recent-activities-dom')
);