
export const Form = () => {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h3>Registro de profesores </h3>

                </div>
                <div className="card-body">
                    <form action="">
                        <div className="row">
                            <div className="col-lg-6">
                                <label htmlFor="txtTeachersid" className="form-label">Matricula del Profesor:</label>
                                <input type="Number" id="txtTeachersid" className="form-control" name="teachers_id" />
                                {/* el name debe ser igual modelo de la base de datos */}
                            </div>
                            <div className="col-lg-6">
                                <label htmlFor="txtName" className="form-label">Nombre:</label>
                                <input type="text" id="txtName" className="form-control" name="name" />
                            </div>
                            <div className="col-lg-6">
                                <label htmlFor="txtLastanme" className="form-label">Apellido</label>
                                <input type="txt" id="txtLastname" className="form-control" name="lastname" />
                                {/* el name debe ser igual modelo de la base de datos */}
                            </div>
                            <div className="col-lg-6">
                                <label htmlFor="txtCareer" className="form-label"> Carrera:</label>
                                <input type="Number" id="txtCareer" className="form-control" name="career" />
                            </div>

                            <div className="col-lg-6">
                                <label htmlFor="txtSalary" className="form-label">Salario:</label>
                                <input type="number" id="txtSalary" className="form-control" name="salary" />
                                {/* el name debe ser igual modelo de la base de datos */}
                            </div>
                            <div className="col-lg-6">
                                <label htmlFor="txtAverage" className="form-label"> Calificacion </label>
                                <input type="Number " id="txtAverage" className="form-control" name="average " />
                            </div>
                            <div className="row">
                                <div className="col-lg-6">

                                </div>
                            </div>


                            <div className="col-lg-12">
                                <br />
                                <button>Guardar</button>
                            </div>






                        </div>
                    </form>
                </div>
            </div>



        </>
    )
}
